/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [snum]
      ,[sname]
      ,[city]
      ,[comm]
      ,[role]
  FROM [inventorsoft].[dbo].[Salers]
  WHERE city = 'Barcelona' AND comm > 0.10