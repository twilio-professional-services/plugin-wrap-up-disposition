// Custom values for the Topic and Outcome Select
// value is the same for any language for Flex Insights Reporting

interface IOutcome {
  value: string,
  labels: { [language: string]: string },
  disabled?: boolean
}

export const outcomes: Array<IOutcome> = [
  {
    value: "SELECT OUTCOME",
    labels: { "en-US": "SELECT OUTCOME", "es-MX": "Seleccionar Resultado" },
    disabled: true
  },
  {
    value: "New Order",
    labels: { "en-US": "New Order", "es-MX": "Nuevo orden" }
  },
  {
    value: "Order Updated",
    labels: { "en-US": "Order Updated","es-MX": "Orden es actualizaciones" }
  },
  {
    value: "Provided Product details",
    labels: { "en-US": "Provided Product details", "es-MX": "Detalles del producto proporcionado" }
  },
  {
    value: "Canceled Service",
    labels: { "en-US": "Canceled Service", "es-MX": "Servicio Cancelado" }
  },
  {
    value: "Changed Service",
    labels: { "en-US": "Changed Service", "es-MX": "Servicio Cambiado" }
  },
  { 
    value: "Renewed Membership", 
    labels: { "en-US": "Renewed Membership", "es-MX": "Membresía renovada" } 
  },
  { 
    value: "Refund Processed", 
    labels: { "en-US": "Refund Processed", "es-MX": "reembolso procesado" } 
  },
  { 
    value: "Warranty Extended", 
    labels: { "en-US": "Warranty Extended", "es-MX": "Garantía Extendida"} 
  }
]


interface ITopic {
  value: string,
  labels: { [language: string]: string },
  disabled?: boolean
}

export const topics: Array<ITopic> = [
  {
    value: "SELECT TOPIC",
    labels: { "en-US": "SELECT TOPIC", "es-MX": "Seleccionar tema" },
    disabled: true
  },{
    value: "Inquiry",
    labels: { "en-US": "Inquiry",  "es-MX": "Consulta" }
  },
  {
    value: "Purchase",
    labels: { "en-US": "Purchase",  "es-MX": "Compra" }
  },
  {
    value: "Return",
    labels: { "en-US": "Return", "es-MX": "Retorno" }
  },
  {
    value: "Warranty",
    labels: { "en-US": "Warranty", "es-MX": "Garantía" }
  },
  {
    value: "Membership",
    labels: { "en-US": "Membership", "es-MX": "Membresía" }
  }

]


// Add Spanish, Portuguese and German