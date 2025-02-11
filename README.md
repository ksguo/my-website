### 数据库更新prisma
```npx prisma migrate dev --name init
```
### 数据库更新后，你需要重新生成 Prisma Client，以便在代码里使用：
```
npx prisma generate
```
