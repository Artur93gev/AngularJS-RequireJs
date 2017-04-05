# AngularJS-RequireJs

SYNOPSYS

	As an apllication it is following several concepts :
		
		1. AMD(Asynchronous module definition)
			Application is using Amd to have faster web application which will be able to become bigger and eat more resources than usually application does, but at the same time not showing any low performance.This technology is providing us RequireJs.We're using 2.1.22 version of RequireJs.
		2. Modulized AngularJs Application
			Application is writen in AngularJs(v1.3.15).Application has is using itself another applications which are 
			included as dependencies and realised as angular modules.All this module/applications are using the same 
			platform module to connect to eahc other, to use error-handler and Facade part.Also they have their shared module which is alloing application to go trought the code repeating using shared functionality
		3. EDP(Event Driven Programing)
			Each module is a single application and is based on events without understanding from where is coming event
			for whom is his own functionality

INSTALL

	Operating Systems
		
		. Windows
		. Linux
		. MacOs

	Depenedencies
		
		.NodeJs
		.Npm or Yarn
		.Ruby
		.Sass

	Install Dependencies

	    . Install node.js(if it is Linux just run in the terminal 'sudo apt-get install node' command,
	    . Install bower globally by running 'npm install -g bower' command (if you're using Linux you'll need to 
	    	run npm with sudo),
	    . Install grunt globally by running 'npm install -g grunt-cli' command (if you're using Linux you'll need to 
	    	run npm with sudo),
	    . Then you need to run 'npm install' ('sudo npm install' if Linux) command to install server dependencies
	    . Run 'bower install' for fronend depenedencies and libs( if you're using Linux you'll run it with this way
	    	first 	: run 'sudo su' command,
	    	second 	: run 'bower install --allow-root' command

	    	P.S. bower can't be run with sudo but we need to access bower to touch file descriptor of root so we are running it with as root who allows none root command)))
	    )
	    . Install Ruby by following the instructures of this url https://www.ruby-lang.org/en/documentation/installation/
	    . Install Gem and bundler from the url that you used to install Ruby
	    . Install Sass by runnning gem install sass (or with sudo if it is Linux)

	    NOTE you must comment 4139-th line of angular-animate and the 62-nd line of angular-aria
	    because there is a version conflict between angular versions

	Running application

		. grunt (it we'll be open your own machine's 9000 port (localhost://9000))
