Express.js resoures from portfolio - www.thisiscraigbrown.com

Files of interested --

##Soundcloud Audio Vizualizer

Code (relevant only) from SC Vizualizer hosted here: http://www.thisiscraigbrown.com/work/audible/beats

*Folders and Content:*

####hype
  - SoundCloud Viz Lights: HTML5 hype exports for central animation
  - SoundCloud Viz Lights Big: HTML5 hype exports for bottom left/right animation

####routes
  - work.js: server side route which serves up data for work page
    -relevant method: **syncSoundcloudWavedata()**

####views
  - layout.html: embeds central hype animation and also set up global opacity toggle and timeline variables
  - work.html: render work page view
    -relevant method: **createSoundcloudGallery(container)**
