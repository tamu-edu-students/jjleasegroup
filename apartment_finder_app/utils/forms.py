from django import forms


class LoginForm(forms.Form):
    customer_email = forms.EmailField(
        label='customer_email',
        widget=forms.TextInput,
        required=True   # cannot be empty
    )
    customer_password = forms.CharField(
        label='customer_password',
        widget=forms.PasswordInput(render_value=True),
        required=True  # cannot be empty
    )

    verification_code = forms.CharField(
        label='verification_code',
        widget=forms.TextInput,
        required=True  # cannot be empty
    )


class ChangePasswordForm(forms.Form):
    old_password = forms.CharField(
        label='old_password',
        widget=forms.PasswordInput(render_value=True),
        required=True   # cannot be empty
    )
    new_password = forms.CharField(
        label='new_password',
        widget=forms.PasswordInput(render_value=True),
        required=True  # cannot be empty
    )

    confirmed_new_password = forms.CharField(
        label='confirmed_new_password',
        widget=forms.PasswordInput,
        required=True  # cannot be empty
    )