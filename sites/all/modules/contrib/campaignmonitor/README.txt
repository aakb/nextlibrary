{\rtf1\ansi\ansicpg1252\cocoartf949\cocoasubrtf460
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww22080\viewh18540\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\ql\qnatural\pardirnatural

\f0\fs24 \cf0 $Id: README.txt,v 1.3.2.4 2009/06/26 07:44:34 ssherriff Exp $\
\
Campaign Monitor\
=========\
\
----------------\
Description\
----------------\
\
This module integrates the mailing list service Campaign Monitor. \
http://www.campaignmonitor.com\
\
Campaign Monitor is a mailing list and newsletter service useful for web and design professionals to manage newsletters and campaigns for your clients. The client can then login through a reports interface to view the detailed reports of their campaign.\
\
TO USE THIS MODULE YOU MUST HAVE AN ACCOUNT WITH CAMPAIGNMONITOR.COM\
\
This module adds a block that allows people to subscribe to a Campaign Monitor list through the API. It also adds a page that lists past campaigns.\
\
This module was developed by T-Rex Art: http://www.trexart.com.au\
\
This module uses the CampaignMonitor PHP API. All credits and information for this library are available here:\
http://code.google.com/p/campaignmonitor-php/\
\
------------\
Installation\
------------\
\
- Create a folder in your modules directory called campaignmonitor and put the module's files in this directory\
\
- Enable the module on the Modules admin page:\
    Administer > Site building > Modules\
\
------------------\
Configuration\
-----------------\
\
Make sure to have your API Key, Client Id and List id for the list you wish to use.\
To retrieve these values follow the instructions here:\
http://www.campaignmonitor.com/api/required.aspx\
\
This module has been updated to work with the new combined Campaign Monitor and MailBuild service, so please make sure you have updated your API keys if needed.\
\
Enter these into the module's settings page.\
\
It is encouraged for you to spend some time setting up your campaign monitor account before diving in with this module.\
\
-----------------\
Future plans\
-----------------\
\
 I hope to integrate more of the API into this module in the future. \
\
- First on the list is to be able to have more then one list setup so you can have multiple blocks.\
\
- Custom fields is also a goal.\
\
- I might, but not sure about integrating the actual reports, the tools on campaign monitor are great, so it would be pointless to try to copy these. Maybe have an integration of the login so that clients can login and be directed to the reports page with the username and password already filled in.\
\
- I will gladly take any suggestions.}