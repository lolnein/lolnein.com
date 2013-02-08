---
layout: default
title: Archive
---

{% for post in site.posts %}
| {{ post.date | date_to_long_string }} | <a href="{{ post.url }}">{{ post.title }}</a> |
{% endfor %}
