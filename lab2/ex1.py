from Cryptodome.Cipher import AES
import time as t
import sys
import base64 as b64
import math

def ranges(end, n=1):
    iterable = range(0, end)
    step_size = step(end, n)
    return list((iterable[i:min(i + step_size, end)]) for i in range(0, end, step_size))

def step(range_end, parts):
    return int(math.ceil(range_end / parts))


def aes256cbc_bruteforce(cipherb64, iv, k2, t_cores, core):
    cipher_text = (b64.b64decode(cipherb64))
    k1len = 64 - len(k2)
    keys_number = (16 ** k1len) - 1
    space = ranges(keys_number + 1, t_cores)[core if core < t_cores else 0]

    for k1 in space:
        key = ''.join([hex(k1)[2:].zfill(k1len), k2])
        msg = AES.new(bytes.fromhex(key), AES.MODE_CBC, bytes.fromhex(iv)) \
            .decrypt(cipher_text) \
            .decode('utf-8', 'replace').rstrip('\x0e')
        if '\ufffd' not in msg:
            print(''.join([key, '\n', msg]))
            return
        else:
            continue

    print('fail')


if __name__ == "__main__":
    start_time = t.time()
    if len(sys.argv) == 6:
        aes256cbc_bruteforce(sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]))
    else:
        print('Provide all arguments: <filename> <cipher text> <iv> <key suffix> <total cores> <core>')
    end_time = t.time()
    print(str(end_time - start_time) + 's')
