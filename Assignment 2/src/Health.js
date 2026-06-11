const os = require("node:os")

const health = (req, res) => {
  const memoryUsage = process.memoryUsage();
  
  const systemInfo = {
    RAM: {
      TotalRam: (os.totalmem() / 1024 / 1024).toFixed(2),
      FreeRam: (os.freemem() / 1024 / 1024).toFixed(2),
    },
    CPU: {
      CPUModel: os.cpus()[0],
      CpuCores: os.cpus().length,
    },
    ProcessUpTime: Math.floor(process.uptime()),
    memoryUsage: {
      rss: (memoryUsage.rss / 1024 / 1024).toFixed(),
      heapUsed: (memoryUsage.heapUsed / 1024 / 1024).toFixed(),
      teapTotal: (memoryUsage.heapTotal / 1024 / 1024).toFixed(),
    },
    pid: process.pid,
    platform: os.platform(),
    osType: os.type(),
  };

  res.writeHead(200);
  return res.end(JSON.stringify(systemInfo));
};

module.exports = health