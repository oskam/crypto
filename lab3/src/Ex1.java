import org.bouncycastle.jce.provider.BouncyCastleProvider;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.Arrays;

public class Ex1 {

    private static final String AES_CBC = "AES/CBC/PKCS5Padding";
    private static final String AES_CTR = "AES/CTR/PKCS5Padding";
    private static final String AES_GCM = "AES/GCM/NoPadding";

    public static void main(String[] args) {

        int action;
        String mode;
        String inputPath;
        KeyStore keyStore;
        Key key;

        inputPath = args[2];

        if (args.length != 5) {
            System.err.println("ERROR: Wrong amount of arguments.\n"
                    + "Usage: \n"
                    + "<encrypt|enc|e|decrypt|dec|d> <ctr|cbc|gcm> <input file path> <keystore path> <key alias>");
            return;
        }

        // ARGS: action mode input keystore alias

        switch (args[0]) {
            case "encrypt":
            case "enc":
            case "e":
                action = Cipher.ENCRYPT_MODE;
                break;
            case "decrypt":
            case "dec":
            case "d":
                action = Cipher.DECRYPT_MODE;
                if (!inputPath.endsWith(".aes256")) {
                    System.err.println("ERROR: wrong input file extension, only .aes256 files are allowed");
                }
                break;
            default:
                System.err.println("ERROR: wrong first argument, available ones are: encrypt, enc, e, decrypt, dec, d");
                return;
        }

        switch (args[1]) {
            case "cbc":
                mode = AES_CBC;
                break;
            case "gcm":
                mode = AES_GCM;
                break;
            case "ctr":
                mode = AES_CTR;
                break;
            default:
                System.err.println("ERROR: wrong second argument, available ones are: cbc, gcm, ctr");
                return;
        }

        try {
            // keytool -keystore aes-keystore.jck -keypass 123456 -genseckey -keyalg AES -keysize 256 -alias key1 -storetype "JCEKS"

            keyStore = KeyStore.getInstance("JCEKS");
            FileInputStream keyStoreStream = new FileInputStream(new File(args[3]));
            keyStore.load(keyStoreStream, System.console().readPassword("Keystore password: "));
            key = keyStore.getKey(args[4], System.console().readPassword("Key password: "));

            cipher(action, mode, inputPath, key);
        } catch (KeyStoreException | UnrecoverableKeyException | CertificateException e) {
            System.err.println("Key error, check keystore path and make sure password is correct");
            e.printStackTrace();
        } catch (InvalidKeyException| NoSuchAlgorithmException | InvalidAlgorithmParameterException
                | NoSuchPaddingException | BadPaddingException | NoSuchProviderException
                | IllegalBlockSizeException e) {
            System.err.println("Cipher error, check if correct key was chosen");
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("File access error, check keystore and input file path, "
                    + "also may be problem with saving output file");
            e.printStackTrace();
        }

    }

    private static void cipher(int cipherMode, String mode, String input, Key key) throws NoSuchPaddingException,
            NoSuchAlgorithmException, IOException, InvalidAlgorithmParameterException, InvalidKeyException,
            BadPaddingException, IllegalBlockSizeException, NoSuchProviderException {

        Security.addProvider(new BouncyCastleProvider());
        Cipher cipher = Cipher.getInstance(mode, "BC");

        SecureRandom r = new SecureRandom();

        byte[] ivBytes = new byte[16];
        byte[] inputBytes;

        if (cipherMode == Cipher.ENCRYPT_MODE) {
            r.nextBytes(ivBytes);
            inputBytes = Files.readAllBytes(Paths.get(input));
        } else {    // DECRYPT_MODE
            byte[] fileBytes = Files.readAllBytes(Paths.get(input));
            ivBytes = Arrays.copyOfRange(fileBytes, 0, 16);
            inputBytes = Arrays.copyOfRange(fileBytes, 16, fileBytes.length);
        }

        cipher.init(cipherMode, key, new IvParameterSpec(ivBytes));
        byte[] resultBytes = cipher.doFinal(inputBytes);

        if (cipherMode == Cipher.ENCRYPT_MODE) {
            Path outputPath = Files.createFile(Paths.get(input + ".aes256"));
            Files.write(outputPath, ivBytes);
            Files.write(outputPath, resultBytes, StandardOpenOption.WRITE, StandardOpenOption.APPEND);

            System.out.println("Encryption successful, encrypted file saved to: " + outputPath.toString());
        } else {    // DECRYPT_MODE
            Path outputPath = Files.createFile(Paths.get(input.substring(0, input.lastIndexOf(".aes256"))));
            Files.write(outputPath, resultBytes);
            System.out.println("Decryption successful, decrypted file saved to: " + outputPath.toString());
        }
    }
}