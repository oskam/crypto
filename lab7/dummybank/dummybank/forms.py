from allauth.account.forms import LoginForm
from captcha.fields import ReCaptchaField


class LoginFormWithCaptcha(LoginForm):

    def __init__(self, *args, **kwargs):
        super(LoginFormWithCaptcha, self).__init__(*args, **kwargs)
        self.fields.update({'captcha': ReCaptchaField()})
