using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CafeManagerServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>()
                    .ConfigureAppConfiguration((context, builder) =>
                    {
                        var configuration = new ConfigurationBuilder()
                         .AddJsonFile("appsettings.json", false)
                         .AddJsonFile($"appsettings.Development.json", true)
                         .AddEnvironmentVariables()
                         .AddCommandLine(args)
                         .Build();

                    });
                });
    }
}
