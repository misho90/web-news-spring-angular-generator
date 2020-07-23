package com.mihov.app.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.mihov.app.model.Todo;

public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {
}
