using EjemploEmail.DataContext;
using EjemploEmail.EjemploConDY;
using EjemploEmail.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContextNorthwind>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("Northwind")));

builder.Services.AddTransient<UsuarioServiceConDY>();
builder.Services.AddTransient<IEmailServiceConDY, EmailServiceConDY>();
builder.Services.AddTransient<INorthwindRepository, NorthwindRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
