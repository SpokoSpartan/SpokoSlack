package com.slack.repositories;

import com.slack.entities.Book;
import com.slack.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Integer countBookByVotedUsers(User user);
}
