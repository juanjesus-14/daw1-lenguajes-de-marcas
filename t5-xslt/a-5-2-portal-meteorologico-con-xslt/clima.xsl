<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/reporte_meteorologico">

<html>

<head>

    <title>GeoClima</title>

    <link rel="stylesheet" href="clima.css"/>

</head>

<body>

<div class="contenedor">

    <h1>GeoClima - Estado del Tiempo</h1>

    <p class="fecha">
        Reporte correspondiente al día:
        <xsl:value-of select="fecha"/>
    </p>

    <div class="tarjetas">

        <xsl:for-each select="localidad">

        <div>

            <xsl:attribute name="class">

                tarjeta

                <xsl:choose>

                    <xsl:when test="temperatura &gt; 25">
                        caliente
                    </xsl:when>

                    <xsl:otherwise>
                        fria
                    </xsl:otherwise>

                </xsl:choose>

            </xsl:attribute>

            <h2>
                <xsl:value-of select="@nombre"/>
            </h2>

            <h3>
                <xsl:value-of select="@provincia"/>
            </h3>

            <p>

                <b>Temperatura:</b>

                <xsl:value-of select="temperatura"/>°C

                <xsl:if test="temperatura &gt; 25">

                  (Ambiente cálido)

                </xsl:if>

            </p>

            <p>

                <b>Cielo:</b>

                <xsl:value-of select="estado_cielo"/>

            </p>

            <p>

                <b>Viento:</b>

                <xsl:value-of select="viento"/> km/h,
                dirección
                <xsl:value-of select="viento/@direccion"/>

            </p>

            <p>

                <b>Estado del Mar:</b>

                <xsl:choose>

                    <xsl:when test="estado_mar='bravo' or estado_mar='peligroso'">

                        <span class="peligro">

                          ¡Mar Bravo! Precaución

                        </span>

                    </xsl:when>

                    <xsl:otherwise>

                        <span class="normal">

                            <xsl:value-of select="estado_mar"/>

                        </span>

                    </xsl:otherwise>

                </xsl:choose>

            </p>

        </div>

        </xsl:for-each>

    </div>

</div>

</body>

</html>

</xsl:template>

</xsl:stylesheet>