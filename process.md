- is there a test api to work with so as not to bombard your 
  server with test data?
- is it just signup with google or should there be a manual signup process
  where they'll input name, password, email, etc like it's on the website?
-



https://dashboard.bitmama.io/signup
https://api.bitmama.io/v1/user

country: "NG"
email: "kudoroayorinde@gmail.com"
firstName: "Ayorinde"
isCertified: false
lastName: "Kudoro"
modal: false
password: "a...w"
phone: "+2348034895313"
refby: ""


{code: 200, status: "success", id: "5c9ae2aaeb523475a2fd598e"}

Please Confirm your email by clicking on the link sent
If you did not recieve confirmation email, click on this link:

https://dashboard.bitmama.io/confirm-email

signin:
https://api.bitmama.io/v1/auth/user
{email: "kudoroayorinde@gmail.com", password: "a...w", shouldRemember: false, modal: false}

code: 200, status: "success",…}
code: 200
status: "success"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOWFlMmFhZWI1MjM0NzVhMmZkNTk4ZSIsImVtYWlsIjoia3Vkb3JvYXlvcmluZGVAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJwYXJ0bmVyIjpmYWxzZSwidmVyaWZpZWQiOnRydWUsImxvY2siOjAsImFjdGl2ZSI6dHJ1ZSwiaWF0IjoxNTUzNjU2MjkzLCJleHAiOjE1NTM2NTk4OTN9.CHlr0gMooe5EZTmnaOSQJ43MSYcDSACpweDi9UQxDqk"