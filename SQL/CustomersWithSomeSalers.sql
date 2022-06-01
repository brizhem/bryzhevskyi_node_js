/****** Script for SelectTopNRows command from SSMS  ******/
WITH SalersWithCustomersNum AS
(SELECT [salerId]
      ,[customerId]
	  ,Salers.sname as sname
  FROM [inventorsoft].[dbo].[Saler_Customer_Relation]
  INNER join Salers ON salerId = Salers.snum
  WHERE Salers.sname IN ('Serres', 'Axelrod', 'Rifkin')
  )

 SELECT [cnum]
      ,[cname]
      ,[city]
      ,[rating]
	  ,SalersWithCustomersNum.salerId
	  ,SalersWithCustomersNum.sname
  FROM [inventorsoft].[dbo].[Customers]
  INNER JOIN SalersWithCustomersNum ON SalersWithCustomersNum.customerId = cnum
  
