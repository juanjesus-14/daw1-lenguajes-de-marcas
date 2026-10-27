<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Historial Clínico - Veterinaria San Antón</title>
                <link rel="stylesheet" href="./consulta.css" />
            </head>
            <body style="font-family: Arial;">
                <h1>Panel de Consultas Veterinaria</h1>
                <xsl:for-each select="/clinica/consulta">
                    <div>
                        <xsl:attribute name="class">
                            <xsl:choose>
                                <xsl:when test="@revision = 'true'">revision</xsl:when>
                                <xsl:otherwise>no_revision</xsl:otherwise>
                            </xsl:choose>
                        </xsl:attribute>


                        <h2> Consulta: <xsl:value-of select="@id" />
                            
                        <xsl:if
                                test="@revision = 'true'"> Requiere Revision </xsl:if>
                        </h2>

                        <p><bold>
                                Mascota: </bold><xsl:value-of select="nombre" />(<xsl:value-of
                                select="especie" />) </p>
                        <p>
                            <bold>Edad: </bold>
                            <xsl:value-of select="edad" />
                        </p>

                        <p>
                            <bold>Fecha : </bold>
                            <xsl:value-of select="fecha" />
                        </p>

                        <table >
                            <tr>
                                <th>Descripción del Procedimiento</th>
                                <th>Precio</th>
                            </tr>
                            <xsl:for-each select="procedimientos/tarea">
                                <tr>
                                    <td>
                                        <xsl:value-of select="descripcion" />
                                    </td>
                                    <td class="precio"><xsl:value-of select="precio" />€</td>
                               
                                </tr>
                            </xsl:for-each>
                        </table>
                        <p class="prioridad">
                            <bold>Prioridad: </bold>
                            <xsl:if test="prioridad = 'alta'">
                                <span class="alta">alta </span>
                            </xsl:if>
                            <xsl:if test="prioridad = 'media'">
                                <span class="media">media </span>
                            </xsl:if>
                            <xsl:if test="prioridad = 'baja'">
                                <span class="baja">baja </span>
                            </xsl:if>
                        </p>
                    </div>
                </xsl:for-each>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>