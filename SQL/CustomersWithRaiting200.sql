/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [cnum]
      ,[cname]
      ,[city]
      ,[rating]
  FROM [inventorsoft].[dbo].[Customers]
  WHERE rating = 200