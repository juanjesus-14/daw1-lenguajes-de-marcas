<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/biblioteca">
        
        <html>
            
            <head>
                
                <title>Biblioteca</title>
                
                <style>
                    
                    body{
                    font-family: Arial;
                    background-color:#f4f4f4;
                    padding:20px;
                    }
                    
                    h1{
                    color:#333;
                    }
                    
                    h2{
                    margin-top:40px;
                    color:#444;
                    }
                    
                    table{
                    width:100%;
                    border-collapse:collapse;
                    background:white;
                    margin-bottom:20px;
                    }
                    
                    th, td{
                    border:1px solid #ccc;
                    padding:10px;
                    text-align:left;
                    }
                    
                    th{
                    background-color:#e0e0e0;
                    }
                    
                    tr:nth-child(even){
                    background-color:#f9f9f9;
                    }
                    
                </style>
                
            </head>
            
            <body>
                
                <h1>Sistema de Biblioteca</h1>
                
                <!-- LIBROS -->
                
                <h2>Libros</h2>
                
                <table>
                    
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor(es)</th>
                        <th>Año</th>
                        <th>Editorial</th>
                        <th>Categoría</th>
                    </tr>
                    
                    <xsl:for-each select="/biblioteca/libros/libro">
                        
                        <tr>
                            
                            <td>
                                <xsl:value-of select="@id"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="titulo"/>
                            </td>
                            
                            <td>
                                
                                <xsl:for-each select="autor">
                                    
                                    <xsl:value-of select="."/>
                                    
                                    <xsl:if test="position()!=last()">
                                        , 
                                    </xsl:if>
                                    
                                </xsl:for-each>
                                
                            </td>
                            
                            <td>
                                <xsl:value-of select="anio"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="editorial"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="@categoria"/>
                            </td>
                            
                        </tr>
                        
                    </xsl:for-each>
                    
                </table>
                
                <!-- USUARIOS -->
                
                <h2>Usuarios</h2>
                
                <table>
                    
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Tipo</th>
                    </tr>
                    
                    <xsl:for-each select="/biblioteca/usuarios/usuario">
                        
                        <tr>
                            
                            <td>
                                <xsl:value-of select="@id"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="nombre"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="apellidos"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="email"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="@tipo"/>
                            </td>
                            
                        </tr>
                        
                    </xsl:for-each>
                    
                </table>
                
                <!-- PRÉSTAMOS -->
                
                <h2>Préstamos</h2>
                
                <table>
                    
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Fecha inicio</th>
                        <th>Fecha devolución</th>
                        <th>Libros</th>
                    </tr>
                    
                    <xsl:for-each select="/biblioteca/prestamos/prestamo">
                        
                        <tr>
                            
                            <td>
                                <xsl:value-of select="@id"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="@usuario"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="fechaInicio"/>
                            </td>
                            
                            <td>
                                <xsl:value-of select="fechaDevolucion"/>
                            </td>
                            
                            <td>
                                
                                <xsl:for-each select="libroRef">
                                    
                                    <xsl:value-of select="@ref"/>
                                    
                                    <xsl:if test="position()!=last()">
                                        , 
                                    </xsl:if>
                                    
                                </xsl:for-each>
                                
                            </td>
                            
                        </tr>
                        
                    </xsl:for-each>
                    
                </table>
                
            </body>
            
        </html>
        
    </xsl:template>
    
</xsl:stylesheet>