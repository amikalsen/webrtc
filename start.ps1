# Start the server in the background
Start-Process "node" "server.js"

# Wait for the server to start
Start-Sleep -Seconds 2

# Open two private Firefox windows
Start-Process "firefox.exe" -ArgumentList "-private-window http://localhost:3000"
Start-Process "firefox.exe" -ArgumentList "-private-window http://localhost:3000"