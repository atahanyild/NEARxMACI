const { exec } = require("child_process");
const path = require("path");

// Function to execute the Bash script
function executeScript(scriptName) {
  const scriptPath = path.join(__dirname, scriptName);
  exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      return;
    }
    console.log(`Script output: ${stdout}`);
  });
}

// Example usage in a Next.js API route
export default function handler(req, res) {
  if (req.method === "POST") {
    // Call executeScript function when the button is clicked
    executeScript();
    res.status(200).json({ message: "Script executed successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
