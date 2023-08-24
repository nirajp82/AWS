* Connect to EC2 insance using SSH
  `ssh -i "My.pem" ec2-user@ec2-12-345-67-890.compute-1.amazonaws.com`
*  logs you into root with the root environment `sudo su`
*  install nginx on the server `sudo amazon-linux-extras install nginx1`
*  Check the status of Nginx `sudo systemctl status nginx`
*  start the nginx server `sudo service nginx start`
*  Restart the nginx service `sudo systemctl restart nginx`
*  Enable Nginx service to start at boot `sudo systemctl enable nginx`
*  Check ersion of the nginx `nginx -V`
*  Install Wget utility `yum -y install wget`
*  View nginx config file `cd /etc/nginx` `ls` `nano nginx.conf`
*  Stop the nginx service `sudo service nginx stop`
*  Disable nginx service `sudo chkconfig nginx off`
*  Uninstall the nginx service `sudo yum remove nginx`
*  Get content of the page: `curl `
*  Display the information about nginx related service in a hierarchical format `ps -ef --forest | grep nginx`
*  Validate the changes of nginx config file. This should be done as soon as changes is done and before restarting the server. `sudo nginx -t`
* `netstat -ntlp` Command

The command `netstat -ntlp` is a Unix-like operating system command used to display network-related information and statistics. Let's break down the components of this command:

  - `netstat`: This is a command-line utility that provides various network-related details, such as network connections, routing tables, interface statistics, and more.
    - `-n`: This option tells `netstat` to display numerical addresses instead of resolving hostnames. In other words, it prevents `netstat` from performing DNS lookups to convert IP addresses to hostnames.
    - `-t`: This option specifies that `netstat` should display TCP (Transmission Control Protocol) connections and related information.
    - `-l`: This option restricts the display to only show listening sockets, which are network sockets actively waiting for incoming connections.
    - `-p`: This option causes `netstat` to display the process or program ID (PID) associated with each network connection. This is particularly useful for identifying which processes are utilizing specific network connections.

When you run the command `netstat -ntlp`, it shows a list of all listening TCP ports along with the associated process IDs, without performing DNS lookups for hostnames. This information is valuable for monitoring network activity and identifying which processes are using particular ports on your system.

* `yum whatprovides 'FEATURENAME'`:
  - `YUM` (Yellowdog Updater, Modified) package manager to query the package repositories and find out which package provides a particular file or feature.
  - `whatprovides`: This is a specific query command within yum that helps you find out which package provides a specific file or feature

  for ex: `yum whatprovides '*/curl'`:  When executed, YUM searches its repositories to find out which package provides the curl executable. It will return information about the package(s) that contain the desired file. 

 
  This feature is particularly useful when you need to locate packages that contain specific files, libraries, or executables, which can be important for debugging, troubleshooting, and software development tasks.

* `tail -f /var/log/nginx/access.log`: allows real-time monitoring of new entries added to the Nginx web server's access log file.




  

