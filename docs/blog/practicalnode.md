# 目录

	1. Setting up Node.js and Other Essentials
	2. Using Express.js 4 to Create Node.js Web Apps
	3. TDD and BDD for Node.js with Mocha
	4. Template Engines: Jade and Handlebars
	5. Persistence with MongoDB and Mongoskin
	6. Using Sessions and OAuth to Authorize and Authenticate Users in Node.js Apps
	7. Boosting Your Node.js Data with the Mongoose ORM Library
	8. Building Node.js REST API Servers with Express.js and Hapi
	9. Real-Time Apps with WebSocket, Socket.IO, and DerbyJS
	10. Getting Node.js Apps Production Ready
	11. Deploying Node.js Apps
	12. Publishing Node.js Modules and Contributing to Open Source

## chapter1
设置环境变量启动node

NODE_ENV=production API_KEY=442CC1FE-4333-46CE-80EE-6705A1896832 node server.js


## chapter3

TDD

针对功能点抽象出接口代码-> 编写单元测试代码 -> 实现接口 -> 运行单元测试 -> 测试通过

> Historically, web apps have been hard to autotest, and developers relied heavily on manual testing. But, certain parts such as standalone services and REST API can be and should be tested thoroughly by the TDD. At the same time, rich user interface (UI) / user experience (UX) can be tested with headless browsers such as PhantomJS.
