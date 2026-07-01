สรุปความรู้
- 

ตอนเริ่มโปรเจคนี้ เริ่มทำจาก Desktop โดยใช้คำสั่งต่อไปนี้
- "CTRL + คลิกขวา -> Open terminal"
- "mkdir Fullstack-Path-2"
- "cd Fullstack-Path-2"

Framework
-

backend
- "mkdir backend"
- "cd backend"
- "npm init -y"
- "npm install express cors dotenv mysql2"
- "npm install --save-dev nodemon"
- "cd .. (หรือใช้ cd Fullstack-Path-2)"

frontend
- "npm create vite#latest frontend -- --template react"
- "cd frontend"
- "npm install"
- "npm install axios"
- "cd .."

จากนั้นก็ใช้คำสั่ง "code ." เพื่อเปิด VS Code ขึ้นมา (ถ้าใช้ "cursor ." ก็จะเปิด Cursor ขึ้นมา)

Git
-

- "git init"
- จากนั้นสร้างไฟล์ .gitignore ที่ /Fullstack-Path-2 แล้วใส่ node_modules กับ .env
- "git add ."
- "git commit -m 'ใส่อะไรก็ได้' "
- "git branch -M main"
- "git remote add origin (ตรงนี้ไปสร้าง repo ใน github แล้วเอา http มาใส่)"
- "git push -u origin" ตรง -u คือตัวย่อมาจาก --set-upstream ที่ทำให้ git บน server (Github) รู้ว่าเราจะใช้ branch main ในการ push และ pull  
- "git push"