/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [onum]
      ,[amt]
      ,[odate]
      ,[Orders].[cnum]
      ,[snum]
	  ,Customers.cname
  FROM [inventorsoft].[dbo].[Orders]
  INNER JOIN Customers ON Orders.cnum = Customers.cnum AND Customers.cname = 'Giovanni'
  