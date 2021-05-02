console.log(`
                                                            
_|_|_|              _|  _|_|_|_|_|  _|  
_|    _|  _|  _|_|          _|          
_|_|_|    _|_|      _|      _|      _|  
_|        _|        _|      _|      _|  
_|        _|        _|      _|      _|  

source code: https://github.com/tiagosomda/wedding/

???? a mistery...
aGEhIHlvdSBoYXZlIGZpZ3VyZWQgb3V0IHRoZSBzZWNyZXQhIENvbmdyYXR1bGF0aW9ucyEgU2VuZCBtZSBhbiBlbWFpbCBhdCBzZWNyZXRAcHJpdGkuZmFtaWx5IHRvIGxldCBtZSBrbm93IDop
`);
;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
