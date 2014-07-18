#!/bin/bash

yum install -y vim-enhanced httpd php nodejs npm git

iptables -F

sed -i 's/\/var\/www\/html/\/vagrant\/www/' /etc/httpd/conf/httpd.conf

service httpd restart
chkconfig httpd on
chkconfig iptables off

npm install -g grunt-cli
npm install -g bower

# Run local node stuff
su -l -c 'pushd /vagrant && npm install' vagrant
su -l -c 'pushd /vagrant && bower --config.interactive=false install' vagrant
su -l -c 'pushd /vagrant && grunt clean all' vagrant
