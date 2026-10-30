var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => 
    options.AddDefaultPolicy(policy => 
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()));


var app = builder.Build();
app.UseCors();

var pokemons = new List<Pokemon>
{
    new(1, "Pikachu", "Electric"),
    new(2, "Bulbasaur", "Grass"),
    new(3, "Charmander", "Fire"),
    new(4, "Squirtle", "Water"),
    new(5, "Gengar", "Ghost"),
    new(6, "Snorlax", "Normal"),
    new(7,"Clefairy", "Fairy"),
    new(8,"Zubat", "Poison"),
    new(9,"Umbreon", "Dark"),
};

app.MapGet("/api/pokemon", () => pokemons);
    
app.Run();

record Pokemon(int Id, string Name, string Type);
