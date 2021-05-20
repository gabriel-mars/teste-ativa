package com.gabriel.teste.model.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tarefa")
public class TarefaEntity implements Serializable {
    @Id
    @SequenceGenerator(name = "generator", sequenceName = "seq_tarefa_id", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
    @Basic(optional = false)
    @Column(name = "id", nullable = false, columnDefinition = "BIGINT DEFAULT NEXTVAL('seq_tarefa_id')")
    private Long id;

    @Column(name = "nome", nullable = false, length = 75)
    private String nome;

    @Column(name = "data_hora", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dataHora;

    @Column(name = "duracao", nullable = false)
    @Temporal(TemporalType.TIME)
    private Date duracao;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_local_id", columnDefinition = "bigint")
    private LocalEntity local;

    @OneToMany(cascade = {CascadeType.REFRESH, CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "fk_tarefa_id", columnDefinition = "bigint")
    private List<ConvidadoEntity> convidados;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataHora() {
        return dataHora;
    }

    public void setDataHora(Date dataHora) {
        this.dataHora = dataHora;
    }

    public Date getDuracao() {
        return duracao;
    }

    public void setDuracao(Date duracao) {
        this.duracao = duracao;
    }

    public LocalEntity getLocal() {
        return local;
    }

    public void setLocal(LocalEntity local) {
        this.local = local;
    }

    public List<ConvidadoEntity> getConvidados() {
        return convidados;
    }

    public void setConvidados(List<ConvidadoEntity> convidados) {
        this.convidados = convidados;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TarefaEntity that = (TarefaEntity) o;
        return Objects.equals(id, that.id) && Objects.equals(nome, that.nome) && Objects.equals(dataHora, that.dataHora) && Objects.equals(duracao, that.duracao) && Objects.equals(local, that.local) && Objects.equals(convidados, that.convidados);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, dataHora, duracao, local, convidados);
    }

    @Override
    public String toString() {
        return "TarefaEntity{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", dataHora=" + dataHora +
                ", duracao=" + duracao +
                ", local=" + local.getNome() +
                '}';
    }
}
