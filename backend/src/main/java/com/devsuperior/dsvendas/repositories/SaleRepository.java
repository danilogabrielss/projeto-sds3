package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entites.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
