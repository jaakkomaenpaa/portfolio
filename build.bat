call nssm stop portfolio
cd client
call npm run build
call nssm start portfolio