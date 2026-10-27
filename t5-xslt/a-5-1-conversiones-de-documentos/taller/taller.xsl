<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>

<head>
<link rel="stylesheet" href="taller.css"/>
    <title>Taller AutoFix</title>

    <style>
 
        body{
            font-family: Arial;
            background-color:#f5f5f5;
            padding:20px;
        }

        .orden{
            background:white;
            margin-bottom:20px;
            padding:20px;
            border-radius:10px;
            box-shadow:0px 0px 5px gray;
        }

        table{
            width:100%;
            border-collapse:collapse;
            margin-top:10px;
        }

        th, td{
            border:1px solid #ccc;
            padding:8px;
        }

        th{
            background:#eaeaea;
        }

        .urgente{
            border-left:8px solid red;
        }

    </style>

</head>

<body>

<h1>Órdenes de Trabajo - Taller AutoFix</h1>

<xsl:for-each select="/taller/orden">

<div>

    <xsl:attribute name="class">

        orden

        <xsl:if test="@urgente='true'">
            urgente
        </xsl:if>

    </xsl:attribute>

    <h2>
        Orden:
        <xsl:value-of select="@numero"/>

        <xsl:if test="@urgente='true'">
            ¡URGENTE!
        </xsl:if>
    </h2>

    <p>
        <b>Vehículo:</b>
        <xsl:value-of select="marca"/>
        <xsl:text> </xsl:text>
        <xsl:value-of select="modelo"/>
        (<xsl:value-of select="anio"/>)
    </p>

    <p>
        <b>Fecha Entrada:</b>
        <xsl:value-of select="fecha"/>
    </p>

    <table>

        <tr>
            <th>Descripción del Servicio</th>
            <th>Coste</th>
        </tr>

        <xsl:for-each select="servicios/item">

        <tr>

            <td>
                <xsl:value-of select="descripcion"/>
            </td>

            <td>
                <xsl:value-of select="coste"/>€
            </td>

        </tr>

        </xsl:for-each>

    </table>

    <p>
        <b>Estado:</b>
        <xsl:value-of select="estado"/>
    </p>

</div>

</xsl:for-each>

</body>
</html>

</xsl:template>

</xsl:stylesheet>