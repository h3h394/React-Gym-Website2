export const pricingSections = [
    {
        title: "Promocoes por periodo",
        subtitle: "Para quem quer fechar mais tempo com o melhor custo total.",
        variant: "promo",
        rows: [
            { label: "2 meses", value: "R$ 155,00" },
            { label: "3 meses", value: "R$ 205,00" },
            { label: "4 meses", value: "R$ 270,00" },
            { label: "5 meses", value: "R$ 320,00" },
            { label: "6 meses", value: "R$ 385,00" },
            { label: "1 ano", value: "R$ 710,00", highlight: true }
        ]
    },
    {
        title: "Cartao",
        subtitle: "Credito ou debito",
        variant: "payment",
        rows: [
            { label: "Mensalidade", value: "R$ 95,00" },
            { label: "Matricula", value: "R$ 35,00" },
            { label: "Total inicial", value: "R$ 130,00", highlight: true }
        ]
    },
    {
        title: "Dinheiro",
        subtitle: "Pagamento presencial",
        variant: "payment",
        rows: [
            { label: "Mensalidade", value: "R$ 85,00" },
            { label: "Matricula", value: "R$ 25,00" },
            { label: "Total inicial", value: "R$ 110,00", highlight: true }
        ]
    },
    {
        title: "Pix",
        subtitle: "Pagamento rapido",
        variant: "payment",
        rows: [
            { label: "Mensalidade", value: "R$ 95,00" },
            { label: "Matricula", value: "R$ 25,00" },
            { label: "Total inicial", value: "R$ 120,00", highlight: true }
        ]
    },
    {
        title: "Treino avulso",
        subtitle: "Entrada unica para experimentar a academia.",
        variant: "single",
        rows: [{ label: "Valor", value: "R$ 18,00", highlight: true }]
    },
    {
        title: "Beneficios aceitos",
        subtitle: "Use seus parceiros corporativos no atendimento.",
        variant: "partners",
        partners: ["Wellhub", "TotalPass"]
    }
];

export const pricingNote = "Acima de 1 pessoa Matricula GRATIS";