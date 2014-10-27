# Name

Joshua Ferge

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

fill-in-your-answer

# When did you first start working on this week's learning challenges?

fill-in-your-answer

# What is the most difficult part about this week's challenge?

fill-in-your-answer

# Show and tell (8 points)

## Link (2 points)

[ZestFinance issues small, high-rate loans, uses big data to weed out deadbeats](http://www.washingtonpost.com/business/zestfinance-issues-small-high-rate-loans-uses-big-data-to-weed-out-deadbeats/2014/10/10/e34986b6-4d71-11e4-aa5e-7153e466a02d_story.html)

## Discuss how you may apply the machine learning technique mentioned in this article to another interesting problem (6 points).

Could use the same algorithm to determine whether or not people can handle a house mortgate.

# D3 IV

## Checkpoints (3 points x 4 = 12 points)

# 1. (3 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 2. (3 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 3. (3 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

# 4. (3 points)

![image](image.png?raw=true)

[checkpoint](checkpoint.html)

## Challenges (4 points x 3 = 12 points)

# 1. (4 points)

![image](d3chal1.png?raw=true)

# 2. (4 points)

![image](d3chal2.png?raw=true)

# 3. (4 points)

![image](d3chal3.png?raw=true)

[challenge3](week82b.html.html)



# MongoDB II

## Checkpoints (6 points x 2 = 12 points)

### 1 (6 points)

[mongodb js code collecting github events about our course](mongodbcheck1.js)

### 2 (6 points)

![terminal output of mongodb query](screenshot.png?raw=true)

## Challenge 1 (4 points x 10 = 40 points)

### 1 (4 points)

> db.course_events.findOne({'actor.login' : 'doubleshow'})

![screenshot](chal11.png?raw=true)

### 2 (4 points)

> db.course_events.findOne({'actor.login' : 'doubleshow'},{'actor':1});

![screenshot](chal12.png?raw=true)

### 3 (4 points)

> db.course_events.find({'actor.login' : { $in : ['doubleshow', 'chrisbopp']}},{'actor.login':1,'created_at':1});

![screenshot](chal13.png?raw=true)

### 4 (4 points)

> db.course_events.findOne({'type':'PushEvent'});

![screenshot](chal14.png?raw=true)

### 5 (4 points)

> db.course_events.find({'type':'PushEvent'}, {'payload.commits.author.name':'1'});

![screenshot](chal15.png?raw=true)

### 6 (4 points)

> db.course_events.findOne({'type':'IssuesEvent'}, {'payload':'1'});

![screenshot](chal16.png?raw=true)

### 7 (4 points)

> db.course_events.find({'type':'IssuesEvent'}, {'payload.issue.user.login':'1'});

![screenshot](chal17.png?raw=true)

### 8 (4 points)

> db.course_events.find({'type':'IssuesEvent', 'payload.action': 'closed'}, {'payload.issue.id':'1'});


![screenshot](chal18.png?raw=true)

### 9 (4 points)

> db.course_events.find({'type' : { $in:['IssuesEvent']},'payload.issue.state' : 'open'}, {'payload.issue.user.login':1 , 'payload.issue.state':1})

![screenshot](chal19.png?raw=true)

### 10 (4 points)

> db.course_events.find({'type' : { $in:['IssuesEvent']},'payload.issue.comments' : {$gt : 0} }, {'payload.issue.user.login':1 , 'payload.issue.comments':1})

![screenshot](chal110.png?raw=true)


## Challenge 2 (8 points x 2 = 16 points) 

### 1 (8 points)

{question-in-plain-English}

> db.course_events.[complete this query]

![screenshot](screenshot.png?raw=true)

### 2 (8 points)

{question-in-plain-English}

> db.course_events.[complete this query]

![screenshot](screenshot.png?raw=true)
