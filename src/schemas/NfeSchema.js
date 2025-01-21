export const planilhaNfeSchema = {
    referencia_interna: {
      prop: 'referencia_interna',
      type: String,
    },
    natureza_operacao: {
      prop: "natureza_operacao",
      type: String,
    },
    data_emissao: {
      prop: "data_emissao",
      type: String,
    },
    data_entrada_saida: {
      prop: "data_entrada_saida",
      type: String,
    },
    tipo_documento: {
      prop: "tipo_documento",
      type: String,
    },
    finalidade_emissao: {
      prop: "finalidade_emissao",
      type: String,
    },
    consumidor_final: {
      prop: "consumidor_final",
      type: String,
    },
    cnpj_cpf_emitente: {
      prop: "cnpj_cpf_emitente",
      type: String,
    },
    nome_emitente: {
      prop: "nome_emitente",
      type: String,
    },
    nome_fantasia_emitente: {
      prop: "nome_fantasia_emitente",
      type: String,
    },
    logradouro_emitente: {
      prop: "logradouro_emitente",
      type: String,
    },
    numero_emitente: {
      prop: "numero_emitente",
      type: String,
    },
    bairro_emitente: {
      prop: "bairro_emitente",
      type: String,
    },
    municipio_emitente: {
      prop: "municipio_emitente",
      type: String,
    },
    uf_emitente: {
      prop: "uf_emitente",
      type: String,
    },
    cep_emitente: {
      prop: "cep_emitente",
      type: String,
    },
    inscricao_estadual_emitente: {
      prop: "inscricao_estadual_emitente",
      type: String,
    },
    nome_destinatario: {
      prop: "nome_destinatario",
      type: String,
    },
    cnpj_cpf_destinatario: {
      prop: "cnpj_cpf_destinatario",
      type: String,
    },
    telefone_destinatario: {
      prop: "telefone_destinatario",
      type: String,
    },
    logradouro_destinatario: {
      prop: "logradouro_destinatario",
      type: String,
    },
    numero_destinatario: {
      prop: "numero_destinatario",
      type: String,
    },
    bairro_destinatario: {
      prop: "bairro_destinatario",
      type: String,
    },
    municipio_destinatario: {
      prop: "municipio_destinatario",
      type: String,
    },
    uf_destinatario: {
      prop: "uf_destinatario",
      type: String,
    },
    pais_destinatario: {
      prop: "pais_destinatario",
      type: String,
    },
    cep_destinatario: {
      prop: "cep_destinatario",
      type: String,
    },
    inscricao_estadual_destinatario: {
      prop: "inscricao_estadual_destinatario",
      type: String,
    },
    indicador_inscricao_estadual_destinatario: {
      prop: "indicador_inscricao_estadual_destinatario",
      type: String,
    },
    valor_frete: {
      prop: "valor_frete",
      type: String,
    },
    valor_seguro: {
      prop: "valor_seguro",
      type: String,
    },
    valor_total: {
      prop: "valor_total",
      type: String,
    },
    valor_produtos: {
      prop: "valor_produtos",
      type: String,
    },
    modalidade_frete: {
      prop: "modalidade_frete",
      type: String,
    },
    informacoes_adicionais_contribuinte: {
      prop: "informacoes_adicionais_contribuinte",
      type: String,
    },
    item: {
      prop: "item",
      type: {
        numero_item: {
          prop: "numero_item",
          type: String,
        },
        codigo_produto: {
          prop: "codigo_produto",
          type: String,
        },
        descricao: {
          prop: "descricao",
          type: String,
        },
        cfop: {
          prop: "cfop",
          type: String,
        },
        unidade_comercial: {
          prop: "unidade_comercial",
          type: String,
        },
        quantidade_comercial: {
          prop: "quantidade_comercial",
          type: String,
        },
        valor_unitario_comercial: {
          prop: "valor_unitario_comercial",
          type: String,
        },
        valor_unitario_tributavel: {
          prop: "valor_unitario_tributavel",
          type: String,
        },
        unidade_tributavel: {
          prop: "unidade_tributavel",
          type: String,
        },
        codigo_ncm: {
          prop: "codigo_ncm",
          type: String,
        },
        quantidade_tributavel: {
          prop: "quantidade_tributavel",
          type: String,
        },
        valor_bruto: {
          prop: "valor_bruto",
          type: String,
        },
        icms_situacao_tributaria: {
          prop: "icms_situacao_tributaria",
          type: String,
        },
        icms_origem: {
          prop: "icms_origem",
          type: String,
        },
        pis_situacao_tributaria: {
          prop: "pis_situacao_tributaria",
          type: String,
        },
        cofins_situacao_tributaria: {
          prop: "cofins_situacao_tributaria",
          type: String,
        },
        ipi_valor: {
          prop: "ipi_valor",
          type: String,
        },
        icms_base_calculo: {
          prop: "icms_base_calculo",
          type: String,
        },
        icms_valor: {
          prop: "icms_valor",
          type: String,
        },
        icms_modalidade_base_calculo: {
          prop: "icms_modalidade_base_calculo",
          type: String,
        },
        ipi_situacao_tributaria: {
          prop: "ipi_situacao_tributaria",
          type: String,
        },
        ipi_codigo_selo_controle: {
          prop: "ipi_codigo_selo_controle",
          type: String,
        },
        ipi_quantidade_selo_controle: {
          prop: "ipi_quantidade_selo_controle",
          type: String,
        },
        ipi_codigo_enquadramento_legal: {
          prop: "ipi_codigo_enquadramento_legal",
          type: String,
        },
      },
    },
    nota_referenciada: {
      prop: "nota_referenciada",
      type: {
        chave_nfe_nota_referenciada: {
          prop: "chave_nfe",
          type: String,
        },
      },
    },
  };