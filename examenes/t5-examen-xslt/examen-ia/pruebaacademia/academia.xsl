<?xml version="1.0" encoding="UTF-8"?>

<!-- Declaramos que es un documento XSLT -->
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <!-- Indicamos que la salida será HTML -->
    <xsl:output method="html" encoding="UTF-8"/>
    
    <!-- Plantilla principal.
         match="/" significa comenzar desde la raíz del XML -->
    <xsl:template match="/">
        
        <!-- Inicio del HTML -->
        <html>
            
            <head>
                
                <!-- Título de la pestaña del navegador -->
                <title>Academia</title>
                
                <!-- Enlace con el archivo CSS -->
                <link rel="stylesheet" type="text/css" href="academia.css"/>
                
            </head>
            
            <body>
                
                <!-- Contenedor principal -->
                <div class="contenedor">
                    
                    <!-- Título grande de la página -->
                    <h1>Panel de Cursos Academia</h1>
                    
                    <!-- Recorremos todos los cursos del XML -->
                    <xsl:for-each select="academia/curso">
                        
                        <!-- Tarjeta de cada curso -->
                        <div class="tarjeta">
                            
                            <!-- Cabecera azul -->
                            <div class="cabecera">
                                
                                <!-- Mostramos el código del curso -->
                                <span>
                                    Curso:
                                    <xsl:value-of select="codigo"/>
                                </span>
                                
                                <!-- Condición:
                                     Si el atributo destacado="si"
                                     mostramos la etiqueta amarilla -->
                                <xsl:if test="@destacado='si'">
                                    
                                    <span class="destacado">
                                        Curso Destacado
                                    </span>
                                    
                                </xsl:if>
                                
                            </div>
                            
                            <!-- Zona de datos -->
                            <div class="datos">
                                
                                <!-- Mostramos profesor -->
                                <p>
                                    <b>Profesor:</b>
                                    <xsl:value-of select="profesor"/>
                                </p>
                                
                                <!-- Mostramos alumnos -->
                                <p>
                                    <b>Alumnos:</b>
                                    <xsl:value-of select="alumnos"/>
                                </p>
                                
                                <!-- Mostramos fecha -->
                                <p>
                                    <b>Fecha:</b>
                                    <xsl:value-of select="fecha"/>
                                </p>
                                
                            </div>
                            
                            <!-- Tabla de asignaturas -->
                            <table>
                                
                                <!-- Cabecera de tabla -->
                                <tr>
                                    <th>ASIGNATURA</th>
                                    <th>NOTA</th>
                                </tr>
                                
                                <!-- Recorremos todas las asignaturas -->
                                <xsl:for-each select="asignaturas/asignatura">
                                    
                                    <tr>
                                        
                                        <!-- Nombre asignatura -->
                                        <td>
                                            <xsl:value-of select="nombre"/>
                                        </td>
                                        
                                        <!-- Nota -->
                                        <td class="nota">
                                            <xsl:value-of select="nota"/>
                                        </td>
                                        
                                    </tr>
                                    
                                </xsl:for-each>
                                
                            </table>
                            
                            <!-- Nivel del curso -->
                            <p class="nivel">
                                
                                Nivel:
                                
                                <span>
                                    <xsl:value-of select="nivel"/>
                                </span>
                                
                            </p>
                            
                        </div>
                        
                    </xsl:for-each>
                    
                </div>
                
            </body>
            
        </html>
        
    </xsl:template>
    
</xsl:stylesheet>