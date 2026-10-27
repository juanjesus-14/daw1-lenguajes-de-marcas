<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" encoding="UTF-8" />
    
    <xsl:template match="/aeropuerto">
        
        <html>
            
            <head>
                
                <title>VUELOS</title>
                <link rel="stylesheet" href="vuelos.css" />
                
            </head>
            
            <body>
                <h1>SALIDAS INTERNACIONALES - SALDUBA</h1>
                
                <p class="actualizacion"> Reporte correspondiente al día: <xsl:value-of select="actualizacion" /></p>
                <table>
                    
                    <tr>
                        <th>Vuelo</th>
                        <th>Compañia</th>
                        <th>Destino</th>
                        <th>Hora</th>
                        <th>Puerta (Terminal)</th>
                        <th>Estado / Notas</th>
                    </tr>
                    
                    <xsl:for-each select="vuelo">
                        
                        <tr>
                            <td>
                                <xsl:value-of select="@codigo" />
                            </td>
                            
                            <td>
                                <xsl:value-of select="compania" />
                            </td>
                            
                            <td>
                                <xsl:value-of select="destino" />
                            </td>
                            
                            <td>
                                <xsl:value-of select="hora_salida" />
                            </td>
                            
                            <td>
                                <xsl:value-of select="puerta" />
                                (
                                <xsl:value-of select="puerta/@terminal"/>
                                )
                            </td>
                            
                            <td>
                                <xsl:choose>
                                    
                                    <xsl:when test="estado='cancelado'">
                                        
                                        <span class="cancelado">
                                            <xsl:value-of select="estado" />
                                             
                                            <span class="retraso">
                                                <xsl:if test="retraso_mins &gt; 0">
                                                    
                                                    (Retraso: 
                                                    <xsl:value-of select="retraso_mins" />
                                                    minutos)                                                 
                                                </xsl:if>
                                            </span> 

                                        </span> 
                                        
                                    </xsl:when>   
                                    
                                    <xsl:otherwise>
                                        
                                        <span class="embarcado">
                                            
                                            <xsl:value-of select="estado" />
                                            
                                            <span class="retraso">
                                             <xsl:if test="retraso_mins &gt; 0">
                                                
                                                (Retraso: 
                                                    <xsl:value-of select="retraso_mins" />
                                                minutos)                                                 
                                            </xsl:if>
                                                
                                            </span> 

                                        </span>
                                        
                                    </xsl:otherwise>
                                    
                                </xsl:choose>
                                <xsl:value-of select="estado/@retraso_mins"/>

                                
                            </td>
                            
                        </tr>
                        
                    </xsl:for-each>
                    
                </table>
                
                
            </body>
            
        </html>
        
    </xsl:template>
    
</xsl:stylesheet>