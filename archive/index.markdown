---
layout: post
title: Archive
---

{% for post in site.posts %}| {{ post.date | date:'%Y-%m-%d' }} | <a href="{{ post.url }}">{{ post.title }}</a> |
{% endfor %}
