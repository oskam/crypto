var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/0', 'linked': 5, 'len': 1643 },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'dir': '_m0/1', 'linked': 5, 'len': 1822 },
    { 'url': 'http://127.0.0.1:8000/logout', 'dir': '_m0/2', 'linked': 0, 'len': 1013 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css', 'dir': '_m1/0', 'linked': 2, 'len': 15937 },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css', 'dir': '_m1/1', 'linked': 2, 'len': 1203 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'dir': '_m2/0', 'linked': 2, 'len': 74 },
    { 'url': 'http://127.0.0.1:8000/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000001v475055\x3e', 'dir': '_m2/1', 'linked': 2, 'len': 148 },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/', 'dir': '_m2/2', 'linked': 0, 'len': 26 },
    { 'url': 'http://127.0.0.1:8000/login', 'dir': '_m2/3', 'linked': 5, 'len': 1148 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40304, 'samples': [
    { 'url': 'http://127.0.0.1:8000/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000001v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000013v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000009v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://127.0.0.1:8000/admin/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000041v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000081v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://127.0.0.1:8000/admin/bank/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000076v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/5' },
    { 'url': 'http://127.0.0.1:8000/admin/login/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000051v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/6' },
    { 'url': 'http://127.0.0.1:8000/static/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000025v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/7' },
    { 'url': 'http://127.0.0.1:8000/static/admin/--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000028v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/8' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000032v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/9' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000037v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/10' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000046v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/11' },
    { 'url': 'http://127.0.0.1:8000/static/css/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000101v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/12' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/.htaccess.aspx--\x3e\x22\x3e\x27\x3e\x27\x22\x3csfi000106v475055\x3e', 'extra': '', 'sid': '0', 'dir': '_i0/13' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': '', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://127.0.0.1:8000/accounts/', 'extra': '', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/', 'extra': '', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://127.0.0.1:8000/accounts/login/?next=/bank/', 'extra': '', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://127.0.0.1:8000/admin/./', 'extra': '', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/./', 'extra': '', 'sid': '0', 'dir': '_i1/5' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/', 'extra': '', 'sid': '0', 'dir': '_i1/6' },
    { 'url': 'http://127.0.0.1:8000/admin/bank/./', 'extra': '', 'sid': '0', 'dir': '_i1/7' },
    { 'url': 'http://127.0.0.1:8000/admin/login/./', 'extra': '', 'sid': '0', 'dir': '_i1/8' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i1/9' },
    { 'url': 'http://127.0.0.1:8000/admin/login/?next=/admin/', 'extra': '', 'sid': '0', 'dir': '_i1/10' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i1/11' },
    { 'url': 'http://127.0.0.1:8000/static/', 'extra': '', 'sid': '0', 'dir': '_i1/12' },
    { 'url': 'http://127.0.0.1:8000/static/admin/', 'extra': '', 'sid': '0', 'dir': '_i1/13' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/', 'extra': '', 'sid': '0', 'dir': '_i1/14' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css', 'extra': '\x22utf-8\x22', 'sid': '0', 'dir': '_i1/15' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/base.css/bogus%0ASkipfish-Inject:bogus', 'extra': '', 'sid': '0', 'dir': '_i1/16' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css', 'extra': '\x22utf-8\x22', 'sid': '0', 'dir': '_i1/17' },
    { 'url': 'http://127.0.0.1:8000/static/admin/css/login.css/bogus%0ASkipfish-Inject:bogus', 'extra': '', 'sid': '0', 'dir': '_i1/18' },
    { 'url': 'http://127.0.0.1:8000/static/css/', 'extra': '', 'sid': '0', 'dir': '_i1/19' },
    { 'url': 'http://127.0.0.1:8000/static/css/style.css/bogus%0ASkipfish-Inject:bogus', 'extra': '', 'sid': '0', 'dir': '_i1/20' },
    { 'url': 'http://127.0.0.1:8000/bank', 'extra': '', 'sid': '0', 'dir': '_i1/21' },
    { 'url': 'http://127.0.0.1:8000/login', 'extra': '', 'sid': '0', 'dir': '_i1/22' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i1/23' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i1/24' },
    { 'url': 'http://127.0.0.1:8000/logout', 'extra': '', 'sid': '0', 'dir': '_i1/25' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://127.0.0.1:8000/login/', 'extra': '', 'sid': '0', 'dir': '_i2/2' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/auth/', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://127.0.0.1:8000/admin/bank/', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://127.0.0.1:8000/logout', 'extra': '', 'sid': '0', 'dir': '_i3/3' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://127.0.0.1:8000/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i4/1' },
    { 'url': 'http://127.0.0.1:8000/admin/auth/group/sfi9876/', 'extra': '', 'sid': '0', 'dir': '_i4/2' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://127.0.0.1:8000/', 'extra': 'WSGIServer/0.2 CPython/3.5.2', 'sid': '0', 'dir': '_i6/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://127.0.0.1:8000/admin/login/', 'extra': 'csrftoken', 'sid': '0', 'dir': '_i7/0' } ]
  }
];

