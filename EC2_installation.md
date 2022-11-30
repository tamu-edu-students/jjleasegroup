1. Login to EC2 instance with: 
```
   ssh -i "csce-606-member.pem" ec2-user@ec2-3-84-221-236.compute-1.amazonaws.com
```
then: ```[ec2-user@ip-172-31-83-213 ~]$ ```means connect successfully

2. ```sudo -i``` to installed everything

3. installed mariadb, python3, mysql (all necessary env to run django)

```
yum install mariadb-server
systemctl enable mariadb-server
systemctl start mariadb
mysql_secure_installation
mysql -uroot -p
```

```
yum install python3
pip3 install django
pip3 install mysql-devel gcc gcc-devel python3-devel 
pip install mysqlclient
```


4. git clone the repo and migrate the django database
```
git clone https://github.com/tamu-edu-students/jjleasegroup.git
cd jjleasegroup
pip3 install -r requirements.txt
python3 manage.py migrate
```