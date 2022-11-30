1. Login to EC2 instance with: 
```
   ssh -i "csce-606-member.pem" ec2-user@ec2-3-84-221-236.compute-1.amazonaws.com
```
then: ```[ec2-user@ip-172-31-83-213 ~]$ ```means connect successfully

2. ```sudo -i``` to installed everything

3. installed mariadb, python3, mysql (all necessary env to run django)

```
yum install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb
mysql_secure_installation 
```
   - create a database to migrate later
   ```
      mysql -uroot -p (mariadb pw: !YYmm186014)
      create database apartment_finder;
      use apartment_finder;
   ```

```
yum install python3
pip3 install django
yum install mysql-devel gcc gcc-devel python3-devel 
pip3 install mysqlclient
```


4. git clone the repo and migrate the django database
```
yum install git
git clone https://github.com/tamu-edu-students/jjleasegroup.git
cd jjleasegroup
```
```
pip3 install
   asgiref==3.5.2
   aws-cfn-bootstrap==2.0
   cffi==1.15.1
   cryptography==38.0.4
   Django==3.2.16
   django-cors-headers==3.13.0
   djangorestframework==3.14.0
   docutils==0.14
   lockfile==0.11.0
   mysqlclient==2.1.1
   Pillow==9.3.0
   pycparser==2.21
   PyMySQL==1.0.2
   pystache==0.5.4
   python-daemon==2.2.3
   pytz==2022.6
   simplejson==3.2.0
   sqlparse==0.4.3
   typing-extensions==4.4.0
python3 manage.py migrate
```

5. Last, add ec2 DNS to settings.py
   ```
   
   ```