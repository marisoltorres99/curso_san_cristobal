/*DDL*/
/* 1) */
create database bd_curso_san_cristobal;
use bd_curso_san_cristobal;

/* 2) a) */
create table Cuentas (IDCuentas int IDENTITY(1,1) not null, 
	Descripcion varchar(50) not null, 
	Saldo decimal not null, 
	primary key (IDCuentas));

/* 2) b) */
create table Transacciones (IDTransacciones int IDENTITY(1,1) not null, 
	CuentaID int foreign key references Cuentas(IDCuentas) not null, 
	Monto decimal not null,
	Fecha datetime not null,
	DescripcionMotivo varchar(100),
	primary key (IDTransacciones));

/* 3) */
alter table Cuentas add Nombre varchar(50);

/* 4) */
alter table Cuentas alter column Nombre varchar(70);

/* 5) */
alter table Transacciones drop column DescripcionMotivo;

/*DML*/
/* 1) */
insert into Cuentas(Descripcion, Saldo, Nombre)
values ('Cuenta corriente personal', 15000.00, 'Juan Pérez'),
('Cuenta de ahorros', 25000.50, 'María López'),
('Cuenta de inversión', 120000.75, 'Carlos Gómez');

/* 2) */
update Cuentas set Descripcion = 'Cuenta de ahorros'
where IDCuentas = 1;

/* 3) */
delete from Cuentas where IDCuentas = 3;

/* Consultas con bd Northwind */
/* 1) */
use Northwind;

select * from Customers
order by CompanyName asc;

/* 2) */
select * from Customers
where ContactName like 's%';

/* 3) */
select * from Products
where UnitPrice > 50;

/* 4) */
select count(ProductID) as cantidad_discontinuados from Products
where Discontinued = 1;

/* 5) */
select max(UnitPrice) from Products;

/* 6) */
select ProductName, UnitPrice from Products
where UnitPrice in (select max(UnitPrice) from Products);

/* 7) */
select p.ProductName, c.CategoryName from Products p
inner join Categories c
on p.CategoryID = c.CategoryID;

/* 8) */
select c.CompanyName, od.* from Customers c
left join Orders o
on c.CustomerID = o.CustomerID
left join [Order Details] od
on o.OrderID = od.OrderID;

/* 9) */
select c.CustomerID, c.CompanyName, count(OrderID) as cantidad_ordenes from Customers c
left join Orders o
on c.CustomerID = o.CustomerID
group by c.CustomerID, c.CompanyName;

/* 10) */
select s.SupplierID, s.CompanyName, count(p.ProductID) 
as cantidad_productos_suministrados from Suppliers s
inner join Products p
on s.SupplierID = p.SupplierID
group by s.SupplierID, s.CompanyName
having count(p.ProductID) > 3;

go

/* 11) */
create procedure CustomersCountry @Country nvarchar(15)
as
begin

select c.CompanyName, c.Country from Customers c
where c.Country = @Country;

end;

go

exec CustomersCountry @Country = 'Mexico'; 
