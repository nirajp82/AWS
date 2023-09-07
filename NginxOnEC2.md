* Connect to EC2 insance using SSH
  `ssh -i "My.pem" ec2-user@ec2-12-345-67-890.compute-1.amazonaws.com`
*  logs you into root with the root environment `sudo su`
*  install nginx on the server `sudo amazon-linux-extras install nginx1` or `sudo yum install nginx`
*  Check the status of Nginx `sudo systemctl status nginx`
*  start the nginx server `sudo systemctl start nginx` or `sudo service nginx start`
*  Restart the nginx service `sudo systemctl restart nginx`
*  Enable Nginx service to start at boot `sudo systemctl enable nginx`
*  Check ersion of the nginx `nginx -V`
*  test the Nginx configuration for syntax errors and validity: `nginx -t`
*  Install Wget utility `yum -y install wget`
*  View nginx config file `cd /etc/nginx` `ls` `nano nginx.conf`
*  Stop the nginx service `sudo service nginx stop`
*  Disable nginx service `sudo chkconfig nginx off`
*  Uninstall the nginx service `sudo yum remove nginx`
*  Get content of the page: `curl `
*  Display the information about nginx related service in a hierarchical format `ps -ef --forest | grep nginx`
*  View host file content: `cat /etc/hosts`
*  List all installed package on system `rpm -qa | grep httpd-tools` - This command is used to query the RPM (Red Hat Package Manager) database to find out if the package httpd-tools is installed on your system.
*  The md5sum command is used to calculate and display the MD5 checksum (hash) of a file. The MD5 checksum is a 128-bit hexadecimal value that represents the content of the file. It can be used to verify the integrity of a file by comparing it with a known, trusted MD5 checksum. ``` md5sum mydoc.conf ```
*  Validate the changes of nginx config file. This should be done as soon as changes is done and before restarting the server. `sudo nginx -t`
*  Pass actual IP address of the client in http header named 'X-Client-IP' to a backend server using Nginx's reverse proxy capabilities.
   * Reverse Proxy Side:
     
```nginx
  server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://backend-server;
        proxy_set_header X-Client-IP $remote_addr;  # Include client's real IP
    }
}
```
  * BackEnd Server Side:
  ```nginx
      cd /etc/nginx/nginx.conf

      http {
            log_format  main  '$http_x_client_ip -> $remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for" "$host"';
        ...
  ```

*  Customize or set HTTP headers before forwarding client requests to a backend server using Nginx's reverse proxy capabilities. `proxy_set_header Host $host`
* `netstat -ntlp` Command

    The command `netstat -ntlp` is a Unix-like operating system command used to display network-related information and statistics. Let's break down the components of this command:

    - `netstat`: This is a command-line utility that provides various network-related details, such as network connections, routing tables, interface statistics, and more.
      - `-n`: This option tells `netstat` to display numerical addresses instead of resolving hostnames. In other words, it prevents `netstat` from performing DNS lookups to convert IP addresses to hostnames.
      - `-t`: This option specifies that `netstat` should display TCP (Transmission Control Protocol) connections and related information.
      - `-l`: This option restricts the display to only show listening sockets, which are network sockets actively waiting for incoming connections.
      - `-p`: This option causes `netstat` to display the process or program ID (PID) associated with each network connection. This is particularly useful for identifying which processes are utilizing specific network 
    connections.

     When you run the command `netstat -ntlp`, it shows a list of all listening TCP ports along with the associated process IDs, without performing DNS lookups for hostnames. This information is valuable for monitoring 
     network activity and identifying which processes are using particular ports on your system.

* `yum whatprovides 'FEATURENAME'`:
  - `YUM` (Yellowdog Updater, Modified) package manager to query the package repositories and find out which package provides a particular file or feature.
  - `whatprovides`: This is a specific query command within yum that helps you find out which package provides a specific file or feature

  for ex: `yum whatprovides '*/curl'`:  When executed, YUM searches its repositories to find out which package provides the curl executable. It will return information about the package(s) that contain the desired file. 

 
  This feature is particularly useful when you need to locate packages that contain specific files, libraries, or executables, which can be important for debugging, troubleshooting, and software development tasks.

* `tail -f /var/log/nginx/access.log`: allows real-time monitoring of new entries added to the Nginx web server's access log file.
* `pwd`: rint working directory

*  ## Enforcing Specific Policies with `setenforce`

In Linux, the **`getenforce`** and **`setenforce`** commands are related to enforcing security policies, particularly in SELinux (Security-Enhanced Linux).

- **`getenforce`**: This command is used to *get* or *view* the current enforcement mode of SELinux. SELinux has three possible modes:
  - **Enforcing**: Actively enforces security policies, restricting actions that violate those policies.
  - **Permissive**: Logs policy violations but doesn't actively enforce them, functioning as a monitoring mode.
  - **Disabled**: Completely turns off SELinux.

- **`setenforce`**: This command is used to *set* the enforcement mode of SELinux. Administrative privileges (usually via `sudo`) are required. It lets you switch between the three modes mentioned above.

### Example: Enforcing Strict Policies

Let's say you want to enforce strict security policies using SELinux. You can follow these steps:

1. First, check the current enforcement mode:
   ```bash
   getenforce
   ```

2. If the current mode is not *Enforcing* and you want to enforce strict policies, you can set it to *Enforcing* using:
   ```bash
   sudo setenforce Enforcing
   ```

3. After setting it to *Enforcing*, SELinux will actively enforce the defined security policies.

Keep in mind that modifying SELinux modes can impact system behavior and application functionality. It's important to understand the policies and implications before making changes.

In simple words, these commands help you check the current SELinux enforcement status and change it if needed. SELinux provides extra security to Linux systems by controlling process and user access based on security policies.


*  ## `ifconfig`

- The `ifconfig` command is used to **configure** and **display** network interfaces on Unix-like operating systems, including Linux.
- Running `ifconfig` without arguments provides information about all active network interfaces, including IP addresses and MAC addresses.
- It offers a snapshot of the current network configuration, including both physical and virtual network interfaces.


* `tcpdump -i enX0 port 80`: captures network traffic on interface enX0 (replace X with the appropriate interface number) for all packets using port 80. This command will capture and display network packets related to HTTP traffic, which typically runs on port 80.


*  ## `tcpdump -A -vvvv -s 9999 -i enX0 port 80 > /tmp/headers`

- `tcpdump` is a **packet sniffing** tool used to **capture** and **analyze** network traffic in real-time.
- `-A`: Prints packet content as ASCII, aiding analysis, especially for HTTP headers.
- `-vvvv`: Increases verbosity for detailed packet information.
- `-s 9999`: Sets the snap length to capture up to 9999 bytes of packet content.
- `-i enX0`: Specifies the network interface to capture packets from (replace `enX0` with the actual interface name use `ifconfig` command to findout interface name).
- `port 80`: Filters packets to capture those with destination or source port 80 (used for HTTP).
- `> /tmp/headers`: Redirects captured packet data to a file named `headers` in the `/tmp` directory.

The combined command captures network packets on the specified interface, filtering for port 80 (HTTP traffic), and stores the ASCII packet data in `/tmp/headers`. Exercise caution when capturing packets, as it may involve sensitive information and require administrative privileges.

* ## `httpd-tools` and `ab` (Apache Bench)

`httpd-tools` is a collection of utility programs that are commonly used in conjunction with the Apache HTTP Server (`httpd`). One of the tools included in this package is `ab` (Apache Bench), which is used for benchmarking and stress testing web servers.

### Installation

To use `ab`, you need to install the `httpd-tools` package on your system. You can do this using your package manager. Here are the commands for different types of systems:

**Debian-based systems:**
```sh
sudo apt-get install apache2-utils
```

**Red Hat-based systems:**
```sh
sudo yum install httpd-tools
```

### Running `ab`

After installing the package, you can run the `ab` command to simulate requests to a target web server. The basic syntax of the `ab` command is as follows:

```sh
ab [options] [http[s]://]hostname[:port]/path
```

For example, to send 1000 requests with 10 concurrent requests to a target server's root URL, you would use:

```sh
ab -n 1000 -c 10 http://example.com/
```

Where:
- `-n` specifies the total number of requests.
- `-c` specifies the number of concurrent requests.

### Interpreting Results

Once the benchmarking is complete, `ab` will provide statistics about the requests it made, including the number of successful requests, the distribution of response times, and more. This data can help you understand how your web server performs under different loads.

Remember to use `ab` responsibly, as excessive requests or improper usage can impact server performance or disrupt services.

Please note that while `ab` is a valuable tool, it might not perfectly replicate real-world scenarios, so it's recommended to consider other testing methods for a comprehensive performance analysis.

Sure, here's a summary of the Linux commands `less`, `gzip`, and `ll`, along with examples:

### **less**:
   - **Description**: The `less` command is a pager program used to view text files one screen at a time, allowing you to navigate through large files more easily.
   - **Usage**: `less [options] [file]`
   - **Example**:
     - View the contents of a text file:
       ```
       less myfile.txt
       ```
     - Scroll down: Press `Space` or `Page Down`.
     - Scroll up: Press `b` or `Page Up`.
     - Quit: Press `q`.

### **gzip**:
   - **Description**: The `gzip` command is used for file compression and decompression. It compresses files to save space and reduces data transfer time.
   - **Usage**: `gzip [options] [file]`
   - **Example**:
     - Compress a file:
       ```
       gzip myfile.txt
       ```
     - Decompress a compressed file:
       ```
       gzip -d myfile.txt.gz
       ```

### **ll** (an alias for `ls -l`):
   - **Description**: The `ll` command, commonly used as an alias for `ls -l`, displays detailed information about files and directories in a long format.
   - **Usage**: `ll [directory]`
   - **Example**:
     - List files and directories in the current directory in long format:
       ```
       ll
       ```
     - List files and directories in a specific directory in long format:
       ```
       ll /path/to/directory
       ```

These commands are essential tools for viewing, compressing, and listing files and directories in a Linux terminal.



  

