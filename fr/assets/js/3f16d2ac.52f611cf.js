"use strict";(self.webpackChunkblog_sample=self.webpackChunkblog_sample||[]).push([[242],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Computer Network Basic",c={unversionedId:"NetworkBS",id:"NetworkBS",title:"Computer Network Basic",description:"Network hierarchy",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/NetworkBS.md",sourceDirName:".",slug:"/NetworkBS",permalink:"/fr/docs/NetworkBS",editUrl:"https://github.com/Malaaaa/blog-sample/main/docs/NetworkBS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Useful Javascript exmaple",permalink:"/fr/docs/Javascript"},next:{title:"docsify",permalink:"/fr/docs/docsify"}},p=[{value:"Network hierarchy",id:"network-hierarchy",children:[{value:"Seven-layer model",id:"seven-layer-model",children:[],level:3},{value:"4 Layers Protocol: TCP/IP protocol layer",id:"4-layers-protocol-tcpip-protocol-layer",children:[],level:3}],level:2},{value:"Address Introduction",id:"address-introduction",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"computer-network-basic"},"Computer Network Basic"),(0,o.kt)("h2",{id:"network-hierarchy"},"Network hierarchy"),(0,o.kt)("h3",{id:"seven-layer-model"},"Seven-layer model"),(0,o.kt)("p",null,"Application layer: protocol APP for application layer\nRepresentation layer: converting computer-recognized binary into human-recognized data\nSession layer: analyze the communication status of the data\nTransport layer: process and inter-process communication (port information)\nNetwork layer: host-to-host pass (IP address)\nData link layer: complete frame data sent and received (transmitted independently on the network) mac address (device address)\nPhysical layer: not the physical device, but the type of interface on the physical device, the strength of the current"),(0,o.kt)("h3",{id:"4-layers-protocol-tcpip-protocol-layer"},"4 Layers Protocol: TCP/IP protocol layer"),(0,o.kt)("p",null,"Application layer: protocols for the application layer is FTP\u3001Telnet\u3001HTTP\nTransport layer (transport layer): process and inter-process communication (port information) TCP, UDP\nNetwork layer: host-to-host pass (IP address) IP, ICMP\nLink layer: complete frame data sent and received (transmitted independently on the network) mac address (device address) ARP RARP"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210107235436362.png",alt:"image-20210107235436362"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108131350452.png",alt:"image-20210108131350452"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP Protocol Inter-networking Protocol (Network Layer)"))),(0,o.kt)("p",null,"The transmission of packets",(0,o.kt)("strong",{parentName:"p"},"(Internet packets)")," from ",(0,o.kt)("strong",{parentName:"p"},"source address to destination on an interconnected network system provides the necessary functionality"),"\n",(0,o.kt)("strong",{parentName:"p"},"capable protocol"),"\nTry to send data from the source address to the destination\nFeatures.\n",(0,o.kt)("strong",{parentName:"p"},"Unreliable"),": it does not guarantee that an IP packet will successfully reach its destination and provides only best-effort transmission\n",(0,o.kt)("strong",{parentName:"p"},"Connectionless"),": IP does not maintain any information about the status of subsequent packets. Each packet is processed independently of each other.\nIP packets can be received out of order of delivery\n",(0,o.kt)("strong",{parentName:"p"},"IP packets contain the IP address of the host sending it (source address) and the IP address of the host receiving it (destination address)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TCP is a connection-oriented, reliable transport layer communication protocol"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Functions"),".\nProvides communication between ",(0,o.kt)("strong",{parentName:"p"},"processes on different hosts"),"\n",(0,o.kt)("strong",{parentName:"p"},"Features"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"establish link->use link->release link (virtual circuit)"),(0,o.kt)("li",{parentName:"ol"},"TCP packets contain serial numbers and acknowledgement serial numbers"),(0,o.kt)("li",{parentName:"ol"},"packets are sorted and error checked, while corrupted packets can be retransmitted")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Service object")," UDP protocol User Datagram Protocol (transport layer)"),(0,o.kt)("p",null,"Services that require high reliability and are connection-oriented\nsuch as HTTP, FTP, SMTP, etc.\n",(0,o.kt)("strong",{parentName:"p"},"Summary"),": TCP ",(0,o.kt)("strong",{parentName:"p"},"Link Oriented")," Reliable Sorting Error checking Failure retransmission No broadcast support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UDP Protocol User Datagram Protocol (Transport Layer)"))),(0,o.kt)("p",null,"UDP is a ",(0,o.kt)("strong",{parentName:"p"},"connectionless")," oriented transport layer communication protocol"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Functionality"),".\nProvides ",(0,o.kt)("strong",{parentName:"p"},"inter-process communication")," on different hosts\nFeatures"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"no link needs to be established before sending data"),(0,o.kt)("li",{parentName:"ol"},"no checking of packet order"),(0,o.kt)("li",{parentName:"ol"},"no error detection and retransmission mechanism")),(0,o.kt)("p",null,'Service Object\nMainly used for "query-answer" services\nSuch as: NFS, NTP, DNS, etc.\nSummary: UDP ',(0,o.kt)("strong",{parentName:"p"},"no connection")," no sequencing, no error checking, no retransmission, fast, broadcast support"),(0,o.kt)("h2",{id:"address-introduction"},"Address Introduction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mac address (link layer) Device and device communication"))),(0,o.kt)("p",null,"MAC address, used to identify network devices, similar to an ID number, and theoretically unique worldwide.\nComposition: MAC address within Ethernet is a 48bit value"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108195656267.png%22",alt:"image-20210108195656267"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP address IPv4 (network layer) host and host 32bit"))),(0,o.kt)("p",null,"IP address composition: use 32bit, composed of two parts {network ID, host ID}\nSubnet ID: the consecutive bits of the IP address covered by 1 in the subnet mask\nHost ID: the consecutive bits of the IP address covered by 0 in the subnet mask"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108143050377.png",alt:"image-20210108143050377"})),(0,o.kt)("p",null,"IP and subnet mask used together."),(0,o.kt)("p",null,"192.168.0.111/255.255.255.0 == 192.168.0.111/24\n192.168.0.111/255.255.0.0 == 192.168.0.111/16\n192.168.0.111/255.0.0.0 == 192.168.0.111/8"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ip address characteristics"),":different network segments can not communicate directly"),(0,o.kt)("p",null,"Networks with different subnet IDs cannot communicate directly, if they want to communicate, they need to be forwarded by the router\nIP addresses with all 0 host IDs represent network segment addresses.\nThe IP address with host ID of 1 indicates the broadcast address of the network segment."),(0,o.kt)("p",null,"Example: 192.168.0.111/255.255.255.0 Ask the current IP address of the segment ",(0,o.kt)("strong",{parentName:"p"},"192.168.0.0")," and the broadcast address ",(0,o.kt)("strong",{parentName:"p"},"192.168.0.0"),".\naddress ",(0,o.kt)("strong",{parentName:"p"},"192.168.0.255")),(0,o.kt)("p",null,"Note: Neither the segment address nor the broadcast address in any of the segments can be assigned to a host\n192.168.0.1~192.168.0.254 == the number of available IPs is only 254\nCase: 192.168.0.111/255.255.0.0 Ask the segment address ",(0,o.kt)("em",{parentName:"p"},"192.168.0.0")," and the broadcast address ",(0,o.kt)("em",{parentName:"p"},"192.168.255.0.0")," of the current IP\naddress",(0,o.kt)("em",{parentName:"p"},"192.168.255.255")," available hosts 1~65534 == number of available IPs only 65534"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP address classification (more reasonable use of IP addresses)"))),(0,o.kt)("p",null,"Class A address: default 8bit subnet ID, the first one is 0 WAN (country - country, big city - big city)\n0xxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx/255.0.0.0\nClass B address: default 16bit subnet ID,the first two digits are 10 MAN (city-city)\n10xx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx/255.255.0.0\nClass C address: default 24bit subnet ID,the first three digits are 110\n110x xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx/255.255.255.0 LAN\nClass D address: the first four bits are 1110, multicast address\nClass E address: the first five bits are 11110, reserved for future use"),(0,o.kt)("p",null,"Class A,B,C addresses are the most commonly used"),(0,o.kt)("p",null,"Public IP (can be directly connected to the Internet)\nIP unified by InterNIC\nPrivate IP (not directly connected to the Internet)\nMainly used for host connection planning in local area network"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108202556176.png",alt:"image-20210108202556176"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loopback address"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108203054234.png",alt:"image-20210108203054234"})),(0,o.kt)("p",null,"Function\nThe main purpose is to test the network configuration of this machine, being able to ping through 127.0.0.1 means\nThis means that there is no problem with the installation of NIC and IP protocol on this machine.\nNote\nAny address in 127.0.0.1~127.255.255.254 will be looped back to the local host\ndoes not belong to any of the classed address categories, it represents the local virtual interface of the device\nSet the Linux IP sudo ifconfig eth0 192.168.0.222 netmask 255.255.255.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"subnet mask")," (also called network mask, address mask) is a 32-bit value consisting of 1 and 0, and 1\nand 0 are consecutive.\nFeatures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be used in conjunction with IP address, cannot exist alone"),(0,o.kt)("li",{parentName:"ul"},"The consecutive bits in the IP address covered by 1 in the subnet mask are the subnet ID, and the rest are the host ID.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"port number"),": similar to a pid to identify a process; in a network program, the port number is used to identify a running network program"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Malaaaa/cloudimage/master/image-20210108203342082.png",alt:"image-20210108203342082"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Features")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The port number is an unsigned short integer type"),(0,o.kt)("li",{parentName:"ol"},"Each port has a port number"),(0,o.kt)("li",{parentName:"ol"},"TCP, UDP maintain their own independent port number"),(0,o.kt)("li",{parentName:"ol"},"Network applications must occupy at least one port number, but can also occupy multiple port numbers")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Classification of ports")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Well-known ports")," (1~1023)\nUniformly assigned by the Internet Assigned Numbers Authority (IANA) according to user needs\nFor example: FTP-21, HTTP-80, etc.\nThe range normally used by servers; if forced to use, root privilege must be added\n",(0,o.kt)("strong",{parentName:"p"},"Dynamic port")," (1024~65535)\nThe range normally used by applications\nNote\nPort number is similar to process number, only one process can be marked at the same time\nCan be used repeatedly"))}u.isMDXComponent=!0}}]);