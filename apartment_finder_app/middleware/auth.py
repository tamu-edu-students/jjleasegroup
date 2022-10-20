from django.utils.deprecation import MiddlewareMixin
from django.shortcuts import render, redirect, HttpResponse


class AuthMiddleware(MiddlewareMixin):
    def process_request(self, request):
        # 0.排除不需要登陆就能访问的页面
        # request.path_info  获取当前用户请求的URL
        if request.path_info in ["/login/", "/image/code/"]:
            return
        # 如果方法中没有返回值（返回None）,就可以继续往后走
        # 如果有返回值
        # 1.读取当前访问的用户的session信息，如果能读到，说明已经登陆过。
        info_dict = request.session.get('info')
        if info_dict:
            return
        # 没有登陆，重新回到登陆页面
        return redirect('/login/')


