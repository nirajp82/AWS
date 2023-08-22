* Connect to EC2 insance using SSH
  `ssh -i "My.pem" ec2-user@ec2-12-345-67-890.compute-1.amazonaws.com`
*  logs you into root with the root environment `sudo su`
*  install nginx on the server `sudo amazon-linux-extras install nginx1`
*  Check the status of Nginx `systemctl status nginx`
*  start the nginx server `sudo service nginx start`
*  Enable Nginx service to start at boot `systemctl enable nginx`
*  Check ersion of the nginx `nginx -V`
*  Install Wget utility `yum -y install wget`
*  View nginx config file `cd /etc/nginx` `ls` `nano nginx.conf`
*  Stop the nginx service `sudo service nginx stop`
*  Disable nginx service `sudo chkconfig nginx off`
*  Uninstall the nginx service `sudo yum remove nginx`

