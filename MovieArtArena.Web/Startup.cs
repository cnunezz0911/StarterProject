using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MovieArtArena.Web.Startup))]
namespace MovieArtArena.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
