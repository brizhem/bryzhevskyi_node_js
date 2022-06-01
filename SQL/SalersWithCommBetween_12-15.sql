/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [snum]
      ,[sname]
      ,[city]
      ,[comm]
      ,[role]
  FROM [inventorsoft].[dbo].[Salers]
  WHERE comm BETWEEN 0.12 and 0.15 