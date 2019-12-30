---
title: "{{ .Name }}"
date: {{ .Date }}
url: {{ dateFormat "/2006/01/02/" .Date }}{{ .Name }}
cover: {{ dateFormat "/2006/01/02/" .Date }}{{ .Name }}/images/cover.jpg
description:
tags:
---