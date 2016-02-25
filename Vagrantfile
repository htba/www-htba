# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "bento/centos-6.7"

  config.vm.network :forwarded_port, host: 8080, guest: 80

  config.vm.provision :shell, :path => "vagrant/bootstrap.sh"
end
