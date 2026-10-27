<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html" encoding="UTF-8"/>
  
  <xsl:template match="/">
    
    <html>
      
      <head>
        
        <title>Consultas Veterinaria</title>
        
        <link rel="stylesheet" type="text/css" href="prueba.css"/>
        
      </head>
      
      <body>
        
        <div class="contenedor">
          
          <h1>Panel de Consultas Veterinaria</h1>
          
          <xsl:for-each select="prueba/consulta">
            
            <div class="tarjeta">
              
              <div class="cabecera">
                
                <span>
                  Consulta:
                  <xsl:value-of select="codigo"/>
                </span>
                
                <xsl:if test="@revision='si'">
                  
                  <span class="revision">
                    Requiere Revisión
                  </span>
                  
                </xsl:if>
                
              </div>
              
              <div class="datos">
                
                <p>
                  <b>Mascota:</b>
                  <xsl:value-of select="mascota"/>
                  (
                  <xsl:value-of select="mascota/@tipo"/>
                  )
                </p>
                
                <p>
                  <b>Edad:</b>
                  <xsl:value-of select="edad"/>
                  años
                </p>
                
                <p>
                  <b>Fecha:</b>
                  <xsl:value-of select="fecha"/>
                </p>
                
              </div>
              
              <table>
                
                <tr>
                  
                  <th>DESCRIPCIÓN DEL PROCEDIMIENTO</th>
                  
                  <th>PRECIO</th>
                  
                </tr>
                
                <xsl:for-each select="procedimientos/procedimiento">
                  
                  <tr>
                    
                    <td>
                      <xsl:value-of select="descripcion"/>
                    </td>
                    
                    <td class="precio">
                      <xsl:value-of select="precio"/> €
                    </td>
                    
                  </tr>
                  
                </xsl:for-each>
                
              </table>
              
              <p class="prioridad">
                
                Prioridad:
                
                <span>
                  <xsl:value-of select="prioridad"/>
                </span>
                
              </p>
              
            </div>
            
          </xsl:for-each>
          
        </div>
        
      </body>
      
    </html>
    
  </xsl:template>
  
</xsl:stylesheet>